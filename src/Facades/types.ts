import { Gradient, GradientStop, GradientType } from '../Models/gradient/types';
import { Language, Theme } from '../Shared/constants';

export type LanguageFacade = {
	language: Language;
	toggleLanguage: () => void;
};
export type ThemeFacade = {
	theme: Theme;
	toggleTheme: () => void;
};
export type GradientFacade = {
	gradient: Gradient;
	favoriteGradients: Gradient[];
	currentFavoriteGradientId: number | null;
	setGradient: (value: Gradient) => void;
	setGradientColors: (value: GradientStop[]) => void;
	setGradientAngle: (value: number) => void;
	setGradientActiveColor: (value: string) => void;
	setGradientActiveColorId: (value: number) => void;
	setGradientType: (value: GradientType) => void;
	setGradientActiveColorStopPoint: (value: number) => void;
	deleteColor: (value: number) => void;
	addDefaultColor: () => void;
	saveGradientToFavorites: () => void;
};
