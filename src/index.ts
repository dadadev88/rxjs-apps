import { Observable, Observer, Subject } from "rxjs";

const myObserver1: Observer<number> = {
	next: value => console.log('Gettings seconds OBS1', value),
	error: error => console.error('ERROR: ', error),
	complete: () => console.info('COMPLETADO OBS1')
};

const interval$ = new Observable<number>(subs => {

	setTimeout(() => {
		subs.next(Math.random());
	}, 2000);

});

interval$.subscribe();