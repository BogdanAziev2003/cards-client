import Add from './Components/Add/Add';
import All from './Components/All/All';
import Grev from './Components/Pages/Grev';
import Dead from './Components/Pages/Dead';
import Work from './Components/Pages/Work';
import Block from './Components/Pages/Block';

const routes = [
  { path: '/', element: <All />, index: true },
  { path: 'add', element: <Add /> },
  { path: 'grev', element: <Grev /> },
  { path: 'dead', element: <Dead /> },
  { path: 'work', element: <Work /> },
  { path: 'block', element: <Block /> },
];

export default routes;
