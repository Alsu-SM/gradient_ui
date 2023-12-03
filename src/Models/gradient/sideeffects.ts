import {
	addDefaultColorEventHandler,
	deleteColorEventHandler,
	saveGradientToFavoritesEventHandler,
	setActiveColorIdEventHandler,
	setActiveColorStopPointEventHandler,
	setGradientActiveColorEventHandler,
	setGradientAngleEventHandler,
	setGradientColorsEventHandler,
	setGradientEventHandler,
	setGradientTypeEventHandler,
} from './eventsHandlers';
import {
	$gradientModel,
	addDefaultColorEvent,
	deleteColorEvent,
	saveGradientToFavoritesEvent,
	setActiveColorIdEvent,
	setActiveColorStopPointEvent,
	setGradientActiveColorEvent,
	setGradientAngleEvent,
	setGradientColorsEvent,
	setGradientEvent,
	setGradientTypeEvent,
} from '.';

$gradientModel.on(setGradientAngleEvent, setGradientAngleEventHandler);
$gradientModel.on(setGradientColorsEvent, setGradientColorsEventHandler);
$gradientModel.on(setActiveColorIdEvent, setActiveColorIdEventHandler);
$gradientModel.on(
	setGradientActiveColorEvent,
	setGradientActiveColorEventHandler,
);
$gradientModel.on(setGradientTypeEvent, setGradientTypeEventHandler);
$gradientModel.on(
	setActiveColorStopPointEvent,
	setActiveColorStopPointEventHandler,
);
$gradientModel.on(deleteColorEvent, deleteColorEventHandler);
$gradientModel.on(addDefaultColorEvent, addDefaultColorEventHandler);
$gradientModel.on(setGradientEvent, setGradientEventHandler);

$gradientModel.on(
	saveGradientToFavoritesEvent,
	saveGradientToFavoritesEventHandler,
);
