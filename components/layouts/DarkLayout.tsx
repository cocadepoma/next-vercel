import React, { FC, PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren<{}> {
    title?: string;
}

export const DarkLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                padding: "10px",
                borderRadius: "5px",
            }}
        >
            <h3>Dark Layout</h3>
            {children}
        </div>
    );
};
