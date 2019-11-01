import {mocha} from 'mocha'
import chai from 'chai'
import chaiDom from 'chai-dom'
import 'chai/register-should'  // allow us to use should in our tests

import app from './comps/app/app.spec'
import header from './comps/header/header.spec'
import footer from './comps/footer/footer.spec'
import menu from './comps/menu/menu.spec'
import home from './comps/home/home.spec'
import about from './comps/about/about.spec'

chai.use(chaiDom)  // allow us to use extended chai-dom api

mocha.setup('bdd')
mocha.checkLeaks()

app()
header()
footer()
menu()
home()
about()

mocha.run()
