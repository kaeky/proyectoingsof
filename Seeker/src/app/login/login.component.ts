import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { Usuario } from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : Usuario= {
    nombre : "",
    apellido : "",
    telefono : "",
    correo : "",
    usuario : "",
    clave : "",
    estado : true
  }
  user = {
    usuario : "",
    clave :  ""
  }
  closeResult: string;
  modalref: NgbModalRef;
  constructor(private modalService: NgbModal,
              private _us: UserService,
              private r: Router,
              ) {}

  open(content) {
   this.modalref = this.modalService.open(content);
  }


  guardar(){
    this._us.guardar(this.usuario).subscribe((data)=>{
      if(!data.ok){
        alert("error");
      }else{
        alert("Se Guardo");
        this.r.navigate(['dashboard']);
        this.usuario  = {
          nombre : "",
          apellido : "",
          telefono : "",
          correo : "",
          usuario : "",
          clave : "",
          estado: true
        }
      }},err=>{
      alert(err);
    });
  }

  login(){
    this._us.login(this.user).subscribe((data)=>{

      if(data.ok){
        this.r.navigate(['dashboard']);
      }else{
        alert(data.men);
      }

    }, err =>{
      alert(err.error.men);
      // console.log(err);
    })
  }
  ngOnInit() {

  }
}
