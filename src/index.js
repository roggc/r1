import {mocha} from 'mocha'
import app from './comps/app/app.spec'
import header from './comps/header/header.spec'
import footer from './comps/footer/footer.spec'
import menu from './comps/menu/menu.spec'
import home from './comps/home/home.spec'

mocha.setup('bdd')
mocha.checkLeaks()
app()
header()
footer()
menu()
home()
mocha.run()
