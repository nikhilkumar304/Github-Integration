import { LightningElement } from 'lwc';

export default class Spinner extends LightningElement {
    loaded=true;

    handleClick(){
        this.loaded=!this.loaded;
    }
    handleClicked(){
        alert("Login Successfull...");
    }

     isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }
}