import { Dimensions } from 'react-native';
import AutoSizeSheet from 'react-native-autosize-style-sheet';


export let ScreenWidth = Dimensions.get('window').width;
export let ScreenHeight = Dimensions.get('window').height;

export const resizeByWidth = (h) => {
    return (ScreenWidth / 375) * h;
}
export const resizeByHeight = (h) => {
    return (ScreenHeight / 812) * h;
}

const fill = Math.round(ScreenWidth);

const autoSizeSheet = (sheet) => {
    return AutoSizeSheet.create(sheet, fill, 375);
}

export default autoSizeSheet;