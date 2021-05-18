// import logo from 'assets/logo.svg'; // używamy zapisu bez kropek, czyli importy absolutne, które mamy dzięki create-react-app, a konfiguracja znajduje się w pliku jsconfig.json
// import './Root.css'; // tutaj sobie zostawiamy, bo jestw tym samym folderze
import UsersLists from 'components/UsersList/UsersList';

function App() {
  return (
    <>
      <UsersLists />
    </>
  );
}

export default App;

//<></>  - React Fragment - jest to zapis w JSX, który sprawia, że nie renderuje się nic do naszego HTMLa, nie ma żadnego diva, nie ma żadnego innego elementu HTMLa, jest to taki wirtualny element, który sprawia, że nasz komponent ma jedno dziecko. Jest to wymaganie Reacta. Nie możemy mieć komponentu który zawiera dwoje dzieci:

/*
<UserLists />
<UserLists />
*/
