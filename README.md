
primeng doc of version 14 and version 6 
```bash 
https://primeng-v14.pages.dev/setup
https://primeng-v6.pages.dev/#/button
```


## Folder Structure   
```bash 
src/
├── app/
│   ├── core/                           # Singleton services, interceptors, guards, etc.
│   │   ├── services/
│   │   ├── guards/
│   │   └── interceptors/
│   │
│   ├── shared/                         # Reusable modules, pipes, models, utils
│   │   ├── modules/                    # e.g., PrimeNGModule, BootstrapModule
│   │   │   ├── primeng.module.ts
│   │   │   └── bootstrap.module.ts
│   │   ├── models/
│   │   ├── pipes/
│   │   └── utils/
│   │
│   ├── components/                     # Atomic design layer
│   │   ├── atoms/                      # Smallest UI units (buttons, inputs)
│   │   │   ├── input/
│   │   │   │   ├── input.component.ts
│   │   │   │   └── input.component.html
│   │   │   └── button/
│   │   │       ├── button.component.ts
│   │   │       └── button.component.html
│   │   │
│   │   ├── molecules/                  # Combo of atoms (e.g., input + label)
│   │   │   └── login-form/
│   │   │       ├── login-form.component.ts
│   │   │       └── login-form.component.html
│   │   │
│   │   ├── organisms/                  # Complex UI blocks
│   │   │   └── user-profile/
│   │   │       ├── user-profile.component.ts
│   │   │       └── user-profile.component.html
│   │   │
│   │   └── templates/                  # Page skeletons/layouts
│   │       └── auth-layout/
│   │           ├── auth-layout.component.ts
│   │           └── auth-layout.component.html
│   │
│   ├── pages/                          # Routed pages composed of templates + organisms
│   │   └── login/
│   │       ├── login.component.ts
│   │       └── login.component.html
│   │
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
│
├── assets/
├── environments/
└── main.ts
```

## Basic Commands   
to create components  
```bash 
$ ng generate component components/atoms/Table
```

to create module for set of components   
```bash 
$ ng generate module components/atoms/atoms --flat
```

## components   

### Button component   
```html 
  <app-button   label="click" [styleClass]="'p-button-sm p-button'" [onClick]="handleClick" ></app-button>
```
```ts 
  handleClick():void{
    console.log("button layer clicked ! ");
  }
```

### Checkbox component  
```html 
  <app-checkbox [(checked)]="checkboxvalue"  label="tested"></app-checkbox>
  <app-checkbox name="groupname" value="val2" label="value 2" [(checked)]="selectedValues" ></app-checkbox>
  <app-checkbox name="groupname" value="val1" label="value 1" [(checked)]="selectedValues" ></app-checkbox>
```
```ts 
  // single checkbox   
  checkboxvalue: boolean = false;
  // group checkbox  
  selectedValues: string[] = ["val2"];
```
