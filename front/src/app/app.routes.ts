import { Routes } from '@angular/router';
import { RemessasComponent } from './modules/pages/remessas/remessas.component';
import { FiliaisComponent } from './modules/pages/filiais/filiais.component';

export const routes: Routes = [
    {
        path: '',
        component: RemessasComponent
    },
    {
        path: 'remessas',
        component: RemessasComponent
    },
    {
        path: 'filiais',
        component: FiliaisComponent
    }
];
