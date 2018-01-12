import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FileChooser,MediaPlugin} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
nativepath: string;

  constructor(public navCtrl: NavController) {

  }

filechooser(){
	this.fileChooser.open()
  .then(uri =>{
  window.Filepath.resolveNativePath(uri, (result) => {
this.nativepath = result;
this.audioplay();
},(err) => {
alert(err);
  })


   })
  .catch(e => console.log(e));
}
}
