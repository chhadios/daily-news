import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/home'
import Header from './components/header';
import MainLayout from './components/hoc/mainlayout';
import Contacts from './components/contacts';
import PostComponent from './components/posts';
import Clients from './components/Clients';
import Services from './components/Services';
import Career from './components/Career';
import Blogs from './components/Blogs/';


const Routes=()=>(
    <BrowserRouter>
    <Header/>
    <MainLayout>
    <Switch>
        <Route path="/article/:id" component={PostComponent}/>
        <Route path="/contact" component={Contacts}/>
        <Route path="/career" component={Career}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/services" component={Services}/>
        <Route path="/clients" component={Clients}/>
        <Route path="/" component={Home}/>
    </Switch>
    </MainLayout>
    </BrowserRouter>
)

export default Routes