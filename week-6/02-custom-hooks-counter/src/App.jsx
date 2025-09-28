import AppWithCustomHook from './AppWithCustomHook';
import AppWithLocalStorage from './AppWithLocalStorage';
import SingleCounter from './SingleCounter';

const App = () => {

    return (
        <>
            <AppWithLocalStorage />
            <AppWithCustomHook />
            <SingleCounter />
            <SingleCounter />
        </>
    );
};

export default App;
