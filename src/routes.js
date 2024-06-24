import Add from './Components/Add/Add';
import All from './Components/All/All';
import Grev from './Components/Pages/Grev';
import Dead from './Components/Pages/Dead';
import Work from './Components/Pages/Work';
import Block from './Components/Pages/Block';
import Problem from './Components/Pages/Problem';

const routes = [
  { path: '/', element: <All />, index: true },
  { path: 'add', element: <Add /> },
  { path: 'grev', element: <Grev /> },
  { path: 'dead', element: <Dead /> },
  { path: 'work', element: <Work /> },
  { path: 'block', element: <Block /> },
  { path: 'problem', element: <Problem /> },
];

export default routes;
