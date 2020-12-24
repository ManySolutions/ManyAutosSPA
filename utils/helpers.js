import { isMobile } from "mobile-device-detect";
import $ from 'jquery';

export function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


export function isSmallDevice(mobileMaxSize=768) {
  return !!( isMobile || $(window).width() < mobileMaxSize );
}