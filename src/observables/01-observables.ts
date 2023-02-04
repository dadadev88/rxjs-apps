import { Observable, Observer } from "rxjs";

const obs$ = new Observable<string>(subs => {
	subs.next('This is a emit');
	subs.next('This is a second emit');
	/* throw new Error('This is a error forced'); */
	subs.next('This is a third emit');

});

const myObserver: Observer<string> = {
	next: message => {
		console.log('NEXT: On suscriber');
		console.log('Gettings a new message', message);
	},
	error: error => {
		console.error('ERROR: ', error);
	},
	complete: () => {
		console.error('COMPLETADO');
	}
}

obs$.subscribe(myObserver);