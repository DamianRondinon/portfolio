import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    tooltip?: string
}

const ToolTip: FC<Props> = ({children, tooltip}): JSX.Element => {
    return <div className="group relative inline-block text-lg">
        {children}
        <span className="text-sm invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-textPink text-white py-0.5 px-2 rounded absolute -top-6 mt-0 whitespace-nowrap -mx-20">{tooltip}</span>
    </div>;
};

export default ToolTip;