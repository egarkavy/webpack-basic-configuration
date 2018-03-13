import {User} from './user';
import '../css/style.scss';
import * as $ from '../../node_modules/jquery/dist/jquery.js'; //or just 'jquery'
import './../js/app.js';
import '../goods.html';

$(
    () => {
        let user = new User();

        user.sayHi();
        $('div').append("<p>do it</p>");
        console.log(test);

        if(NODE_ENV === "develop") {
            console.log('this is dev'); //yy
        }
    }
)

