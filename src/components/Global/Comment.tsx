import React, { useEffect, useRef } from "react";
import { init } from "@waline/client";
import "@waline/client/waline-meta.css";
import type { WalineInstance, WalineInitOptions } from "@waline/client";

export type WalineOptions = Omit<WalineInitOptions, "el"> & { path: string };

export const Comment = (props: WalineOptions) => {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });

    return () => walineInstanceRef.current?.destroy();
  }, []);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, props);

  return <div ref={containerRef} />;
};
