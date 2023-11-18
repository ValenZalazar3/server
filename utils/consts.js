import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle
} from 'react-icons/hi';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import { BsHouse } from 'react-icons/bs';
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'home-admin',
    label: 'Inicio',
    path: '/admin',
    icon: <HiOutlineViewGrid />
  },

  {
    key: 'clients',
    label: 'Clientes',
    path: '/admin/clients',
    icon: <HiOutlineUsers />
  },
  {
    key: 'products',
    label: 'Productos',
    path: '/admin/products',
    icon: <HiOutlineCube />
  },

  {
    key: 'transactions',
    label: 'Transacciones',
    path: '/admin/transactions',
    icon: <HiOutlineDocumentText />
  },

  {
    key: 'generate-code',
    label: 'Generar código',
    path: '#',
    icon: <HiOutlineReceiptPercent />
  }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'volver-al-inicio',
    label: 'Volver al inicio',
    path: '/',
    icon: <BsHouse />
  },
  {
    key: 'ayuda',
    label: 'Ayuda & Soporte',
    path: 'https://api.whatsapp.com/send?phone=+5491141739482&text=Crack, Fiera, Titan, una preguntita',
    icon: <HiOutlineQuestionMarkCircle />
  }
];

export const types = ['Todos', 'Roscado', 'Krona', 'Espiga'];

export const category = [
  'Ver todas',
  'Acople',
  'Adaptador',
  'Brida',
  'Buje',
  'Canilla',
  'Codo',
  'Cruz',
  'Cupla',
  'Curva',
  'Enchufe',
  'Flexible',
  'Junta',
  'Montura',
  'Niple',
  'Rosca con tuerca',
  'Tapón',
  'Tapa',
  'Tee',
  'Unión',
  'Valvula'
];
