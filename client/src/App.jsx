// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { publicRoutes, ProtectedRoute } from '@/router';
// import { UserProvider } from '@/contexts/UserContext';
import Counter from './pages/Counter';
function App() {
    return (
        <Counter/>
        // <UserProvider>
        //     <Router>
        //         <Routes>
        //             {publicRoutes.map((route, index) => {
        //                 return (
        //                     <Route
        //                         key={index}
        //                         path={route.path}
        //                         element={
        //                             <ProtectedRoute
        //                                 element={route.element}
        //                                 layout={route.layout}
        //                                 isAuthenticated={route.isLogin}
        //                             />
        //                         }
        //                     />
        //                 );
        //             })}
        //         </Routes>
        //     </Router>
        // </UserProvider>
    );
}

export default App;
