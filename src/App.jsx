import React  from 'react';

import AppHeader from './components/Header';
import AppContainer from './components//Container';

class App extends React.Component {

    render() {
        return (
            <main>
                <AppHeader/>
                <div className="row">
                    <AppContainer title="Созданы" color="teal lighten-4" type={0} />
                    <AppContainer title="Запущены" color="orange lighten-4" type={1} />
                    <AppContainer title="Тестируются" color="purple lighten-4" type={3} />
                    <AppContainer title="Завершены" color="light-green lighten-4" type={2} />
                </div>
            </main>
        )
    }
};

export default App;



