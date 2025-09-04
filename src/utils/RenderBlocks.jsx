import blocks from "@/blocks/blockList";
import React from "react";

const RenderBlocks = ({ layout }) => {
  if (!layout || !Array.isArray(layout)) {
    return null;
  }

  return (
    <div>
      {layout.map((block, i) => {
        const Block = blocks[block.blockType];
        if (Block) {
          return <Block key={i} {...block} />;
        }
        return null;
      })}
    </div>
  );
};

export default RenderBlocks;
