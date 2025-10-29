import { Routes } from '@angular/router';
import { CertificadoComponent } from './pages/certificado/certificado';
import { CertificadosComponent } from './pages/certificados/certificados';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form';

export const routes: Routes = [
    // aonde é definido as rotas
    {
        path: "",
        component: CertificadosComponent
    },
    {
        path: "certificados/novo",
        component: CertificadoFormComponent
    },
    {
        path: "certificados/:id",
        component: CertificadoComponent
    },

];
