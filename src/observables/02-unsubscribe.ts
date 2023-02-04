import { Observable, Observer } from "rxjs";

const myObserver1: Observer<number> = {
	next: value => console.log('Gettings seconds OBS1', value),
	error: error => console.error('ERROR: ', error),
	complete: () => console.info('COMPLETADO OBS1')
};

const myObserver2: Observer<number> = {
	next: value => console.log('Gettings seconds OBS2', value),
	error: error => console.error('ERROR: ', error),
	complete: () => console.info('COMPLETADO OBS2')
};

const myObserver3: Observer<number> = {
	next: value => console.log('Gettings seconds OBS3', value),
	error: error => console.error('ERROR: ', error),
	complete: () => console.info('COMPLETADO OBS3')
};

const interval$ = new Observable<number>(subscriber => {
	let counter = 0;
	const intervalId = setInterval(() => {
		counter++;
		subscriber.next(counter);

		if (counter === 5)
			subscriber.complete();
	}, 1000)

	return () => {
		console.log('Unsubscribe has been executed');
		clearInterval(intervalId);
	}
});

const subscriptions = interval$.subscribe(myObserver1);

subscriptions.add(interval$.subscribe(myObserver2));
subscriptions.add(interval$.subscribe(myObserver3));


setTimeout(() => {
	subscriptions.unsubscribe();
	console.log('Unsubscribe TimeOut');
}, 8000);