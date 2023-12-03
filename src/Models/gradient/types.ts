export enum GradientType {
	Linear = 'linear-gradient(',
	Circle = 'radial-gradient(circle ',
	Ellipse = 'radial-gradient(ellipse ',
}
export type GradientStop = {
	id: number;
	color: string;
	stopPoint: number;
};
export type Gradient = {
	id: number;
	colors: GradientStop[];
	angle: number;
	activeColorId: number;
	activeColor: GradientStop;
	type: GradientType;
};

export type GradientModel = {
	gradient: Gradient;
	favoriteGradients: Gradient[];
};
