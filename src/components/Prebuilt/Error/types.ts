import { ReactElement } from "react";
import { ISite } from "../../../lib";

export interface IPrebuiltErrorProps {
	renderLogo?: (site) => ReactElement;
	site: ISite;
};
