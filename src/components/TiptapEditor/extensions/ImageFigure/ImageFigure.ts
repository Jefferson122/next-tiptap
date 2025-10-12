import { JSONContent } from "@tiptap/core";
import { NodeSelection, Plugin, TextSelection } from "@tiptap/pm/state";
// @ts-ignore : This import is necessary due to missing type definitions in the package.
import { __serializeForClipboard as serializeForClipboard } from "@tiptap/pm/view";

import Figure from "../Figure";
import ImageCaption from "./ImageCaption";
import Image from "../Image/Image";
import { DOMSerializer } from "prosemirror-model";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    imageFigure: {
      setImageFigure: (options: { src: string; caption?: string }) => ReturnType;
      imageToFigure: () => ReturnType;
      figureToImage: () => ReturnType;
      removeImage: () => ReturnType;
    };
  }
}

export const ImageFigure = Figure.extend({
  name: "imageFigure",
  content: "image imageCaption?",
  // atom: true,

  addExtensions() {
    return [ImageCaption];
  },

  addCommands() {
    return {
      setImageFigure:
        ({ src, caption }) =>
        ({ chain }) => {
          const content: JSONContent[] = [
            { type: Image.name, attrs: { src } },
            caption === null || caption === undefined
              ? {}
              : {
                  type: ImageCaption.name,
                  content: caption === "" ? undefined : [{ type: "text", text: caption }],
                },
          ];
          return chain().insertContent({ type: this.name, content }).run();
        },

      imageToFigure:
        () =>
        ({ state, chain }) => {
          const { selection } = state;
          const { $anchor } = selection;

          const imagePos = $anchor.pos;
          const imageNode = state.doc.nodeAt(imagePos);

          if (!imageNode || imageNode.type.name !== Image.name) {
            return false;
          }

          const range = {
            from: imagePos,
            to: imagePos + imageNode.nodeSize,
          };

          const content: JSONContent[] = [
            { type: Image.name, attrs: imageNode.attrs },
            { type: ImageCaption.name, content: undefined },
          ];

          return chain()
            .insertContentAt(range, {
              type: this.name,
              content,
            })
            .setTextSelection(range.to + content.length)
            .run();
        },

      figureToImage:
        () =>
        ({ state, commands }) => {
          const { selection } = state;
          const { $anchor } = selection;

          let depth = $anchor.depth;
          let pos = $anchor.pos;

          while (depth > 0) {
            pos = $anchor.before(depth);
            depth--;
          }

          const figureNode = state.doc.nodeAt(pos);

          if (!figureNode || figureNode.type.name !== this.name) {
            return false;
          }

          const range = {
            from: pos,
            to: pos + figureNode.nodeSize,
          };

          const content = figureNode.firstChild;

          return commands.insertContentAt(range, content);
        },

      removeImage:
        () =>
        ({ state, tr, dispatch }) => {
          const { selection } = state;
          const { $anchor } = selection;

          let depth = $anchor.depth;
          let pos = $anchor.pos;

          while (depth > 0) {
            pos = $anchor.before(depth);
            depth--;
          }

          const node = state.doc.nodeAt(pos);

          if (!node || (node.type.name !== this.name && node.type.name !== Image.name)) {
            return false;
          }

          if (dispatch) {
            tr.deleteRange(pos, pos + node.nodeSize);
            dispatch(tr);
          }

          return true;
        },
    };
  },

  addProseMirrorPlugins() {
    let draggedNode: NodeSelection | null;

    return [
      new Plugin({
        props: {
          handleDOMEvents: {
            dragstart: (view, event) => {
              if (
                !event.dataTransfer ||
                !event.target ||
                !(event.target instanceof HTMLImageElement)
              ) {
                return false;
              }

              const pos = view.posAtDOM(event.target, 0);
              const $pos = view.state.doc.resolve(pos);

              if ($pos.parent.type !== this.type) {
                return false;
              }

              draggedNode = NodeSelection.create(view.state.doc, $pos.before($pos.depth));
              const draggedSlice = draggedNode.content();

              // Serializar a HTML para drag-and-drop
              const serializer = DOMSerializer.fromSchema(view.state.schema);
              const fragmentDOM = serializer.serializeFragment(draggedSlice.content);
              const tempDiv = document.createElement("div");
              tempDiv.appendChild(fragmentDOM);

              event.dataTransfer.clearData();
              event.dataTransfer.setData("text/html", tempDiv.innerHTML);
              event.dataTransfer.setData(
                "text/plain",
                draggedSlice.content.textBetween(0, draggedSlice.content.size, "\n")
              );
              event.dataTransfer.effectAllowed = "copyMove";

              return true;
            },

            drop: (view) => {
              if (draggedNode) {
                view.dispatch(view.state.tr.setSelection(draggedNode));
                draggedNode = null;
              }
            },

            dragend: () => {
              draggedNode = null;
            },
          },
        },
      }),
    ];
  },
});

export default ImageFigure;
