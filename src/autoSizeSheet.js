import { Dimensions } from 'react-native';
import AutoSizeSheet from 'react-native-autosize-style-sheet';


export let screenWidth = Dimensions.get('window').width;
export let screenHeight = Dimensions.get('window').height;

export const resizeByWidth = (h) => {
    return (screenWidth / 375) * h;
}
export const resizeByHeight = (h) => {
    return (screenHeight / 812) * h;
}

const fill = Math.round(screenWidth);

export const autoSizeSheet = (sheet) => {
    return AutoSizeSheet.create(sheet, fill, 375);
}
