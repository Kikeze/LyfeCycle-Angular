import { Component, SimpleChanges } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
    selector: 'app-pagina-a',
    templateUrl: './pagina-a.component.html',
    styleUrls: ['./pagina-a.component.css']
})
export class PaginaAComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit {

    nombre: string = "Alguien nuevo";
    segundos: number = 0;
    timer!: Subscription;

    constructor() {
        console.log("Constructor");
    }

    ngOnDestroy(): void {
        console.log("ngOnDestroy");
        this.timer.unsubscribe();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
        console.log(changes);
    }

    ngDoCheck(): void {
        console.log("ngDoCheck");
    }

    ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked(): void {
        console.log("ngAfterViewChecked");
    }

    ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
    }

    ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
    }

    ngOnInit(): void {
        console.log("ngOnInit");

        this.timer = interval(1000).subscribe((s) => {
            this.segundos = s;
        });
    }

    guardar() {
        // Do nothing
    }

}
