import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PlantasComponent } from './plantas/plantas.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from './plantas/planta';

describe('AppComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]), HttpClientModule
      ],
      declarations: [
        AppComponent, PlantasComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;
    const planta1 = new Planta(1, "Gulupa", "Passiflora edulis f. edulis", "Exterior", 3000, "Templado", "Tierra orgánica");
    const planta2 = new Planta(2, "Jade", "Crassula ovata", "Exterior", 500, "Calido", "Tierra orgánica");
    const planta3 = new Planta(3, "Monstera", "Monstera acacoyaguensis", "Interior", 200, "Tropical", "Tierra orgánica");
    component.plantas.push(planta1);
    component.plantas.push(planta2);
    component.plantas.push(planta3);
    
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  //Se esperan 4 filas en la tabla, una para el encabezado y 3 para los elementos creados
  it('should have 4 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

});
