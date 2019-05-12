import React, { useCallback, useState, useRef } from "react";
import { IconButton } from "@material-ui/core";
import { CloudDownload } from "@material-ui/icons";
import { BuildZip } from "./build";
import { INode } from "../node";

interface IProps {
  tree: INode[];
}

type Build = "downloadable" | "building" | "unbuilt";

export const Builder = ({ tree }: IProps) => {
  const link = useRef<string>("");
  const [building, toggleBuilding] = useState<Build>("unbuilt");

  const onClick = useCallback(async () => {
    if ("unbuilt") {
      toggleBuilding("building");
      link.current = await BuildZip(tree);
      toggleBuilding("downloadable");
    }
  }, [tree, link]);

  return (
    <div>
      <IconButton>
        <CloudDownload />
      </IconButton>
    </div>
  );
};
