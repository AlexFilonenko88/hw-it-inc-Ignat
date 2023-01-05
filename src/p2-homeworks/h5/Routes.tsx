import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "../h5-rrd-v6/pages/Error404";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  // add paths
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/juniorPlus',
}

function Junior() {
  return null;
}

function Nav() {
  return (
    <div>
      {/*Switch выбирает первый подходящий роут*/}
      <Routes>

        {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
        {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
        <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
        <Route path={PATH.JUNIOR} element={<Junior/>}/>
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
        // add routes

        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route element={<Error404/>}/>

      </Routes>
    </div>
  )
}

export default Nav
