import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FacturaComponent } from './factura/factura.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

export const routes: Routes = [
    {
        path: 'cliente',
        component: ClienteComponent
    },
    {
        path: 'empleado',
        component: EmpleadoComponent
    },
    {
        path: 'factura',
        component: FacturaComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    },
    {
        path: 'proveedor',
        component: ProveedorComponent
    }
];

