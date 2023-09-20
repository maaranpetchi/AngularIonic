import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  userItem: any[] = [];
  user: user = new user();
  isDisplay: boolean = true;
  userId!: any;
  constructor(private alertController: AlertController) { }
  createuser:boolean = true;
  updateuser:boolean = false;
  ngOnInit(): void {
    // Initialize user data if needed
  }

  addProduct() {
    this.isDisplay = false;
    this.submitButton = true;
    this.updateButton = false;
  }

  back() {
    this.isDisplay = true;
    this.clearForm();
  }

  async onSubmit() {
    if (this.userId !== undefined) {
      this.userItem[this.userId] = JSON.parse(JSON.stringify(this.user));
    } else {
      // Generate a unique ID for the new user
      this.user.id = this.generateUniqueId();
      this.userItem.push(JSON.parse(JSON.stringify(this.user)));
    }
    this.isDisplay = true;
    const alert = await this.alertController.create({
      header: 'Done',
      subHeader: '',
      message: 'Data Added Successfully!',
      buttons: ['OK'],
    });

    await alert.present();
    this.clearForm();
  }

  remove(id: any) {
    this.userItem.splice(id, 1);
  }

  submitButton:boolean = true;
  updateButton:boolean = false;
  edit(id: any) {
    this.user = { ...this.userItem[id] };
    this.userId = id;
    this.isDisplay = false;
    this.submitButton = false;
    this.updateButton =true;
    this.createuser = false;
    this.updateuser=true;
  }

  async updateUser() {
    if (this.userId !== undefined) {
      this.userItem[this.userId] = JSON.parse(JSON.stringify(this.user));
      this.isDisplay = true;
      const alert = await this.alertController.create({
        header: 'Done',
        subHeader: '',
        message: 'Data Update Successfully!',
        buttons: ['OK'],
      });
  
      await alert.present();
      this.clearForm();
    }
  }

  clearForm() {
    this.user = new user();
    this.userId = undefined;
  }

  generateUniqueId() {
    // Generate a unique ID (you can implement your own logic here)
    return Math.random().toString(36).substr(2, 9);
  }
}

export class user {
  email: any;
  username: any;
  gender: any;
  id: any;

  constructor() {
    this.email = '';
    this.username = '';
    this.gender = '';
    this.id = '';
  }
}