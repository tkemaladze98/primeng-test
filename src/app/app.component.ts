import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { GoogleMap, GoogleMapsModule, MapInfoWindow } from '@angular/google-maps';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    ButtonModule,
    NgClass,
    NgFor,
    NgIf,
    MenubarModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    CheckboxModule,
    GoogleMapsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChild(GoogleMap) map!: GoogleMap;
  imagesPath: string = 'assets/images/';
  mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.ROADMAP;
  public showMap: boolean = false;

  center: google.maps.LatLngLiteral = { lat: 41.9999492, lng: 44.0003282 };
  zoom = 7;
  selectedLocation: any;
  locations: any = [
    {
      position: { lat: 41.6979492, lng: 44.8233282 },
      content: 'San Francisco',
      // content: this.generateContentPin(),
      title: 'asdasd',
      // icon: {
      //   url: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
      //   scaledSize: new google.maps.Size(40, 40),
      // },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: 'blue',
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: 'black',
      },
    },
    {
      position: { lat: 41.6919492, lng: 44.8533282 },
      content: 'Oakland',
      // content: this.generateContentPin(),
      title: 'asdasd',
      // icon: {
      //   url: this.imagesPath + 'Avatar.png',
      //   scaledSize: new google.maps.Size(40, 40),
      // },
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: 'blue',
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: 'black',
      },
    },
    {
      position: { lat: 41.6299492, lng: 44.8973282 },
      content: 'Golden Gate',
      // content: this.generateContentPin(),
      title: 'asdasd',
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: 'blue',
        fillOpacity: 0.8,
        strokeWeight: 2,
        strokeColor: 'black',
      },
    },
  ];
  geoJsonData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Abkhazia', color: 'red' },
        geometry: {
          coordinates: [
            [
              [39.99617213440544, 43.38444952974464],
              [40.98482979290097, 43.02513081664267],
              [41.224402064326625, 42.820877414715],
              [41.10045362964232, 43.37390109690503],
              [40.73696480619611, 43.52331514596602],
              [40.52680490408204, 43.521618920271806],
              [40.65928278431511, 43.561406622266276],
              [40.469863109190214, 43.54971903391177],
              [40.33089155669066, 43.56684101388109],
              [40.25258782837116, 43.58256553378999],
              [40.1030848299707, 43.56930193569201],
              [40.085594284962866, 43.53295059129215],
              [40.00320606470291, 43.39951211973283],
              [39.99617213440544, 43.38444952974464],
            ],
          ],
          type: 'Polygon',
        },
      },
      {
        type: 'Feature',
        properties: { name: 'Abkhazia', color: '#FF0000' },
        geometry: {
          coordinates: [
            [
              [41.59146049648692, 43.687627784350155],
              [41.07856601232612, 43.687627784350155],
              [41.07856601232612, 43.60002208445846],
              [41.59146049648692, 43.60002208445846],
              [41.59146049648692, 43.687627784350155],
            ],
          ],
          type: 'Polygon',
        },
      },
    ],
  };
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.map.data.addGeoJson(this.geoJsonData as any);
    //   this.styleRegions();
    // }, 100);
  }

  styleRegions(): void {
    this.map.data.setStyle((feature: any) => {
      return {
        fillColor: feature.getProperty('color'),
        strokeColor: 'black',
        strokeWeight: 1,
        fillOpacity: 0.8,
      };
    });
  }

  openInfoWindow(location: any, marker: any): void {
    this.selectedLocation = location;
    this.infoWindow.open(marker);
  }

  decodePolyline(encoded: string) {
    const coordinates = [];
    let index = 0,
      lat = 0,
      lng = 0;

    while (index < encoded.length) {
      let shift = 0,
        result = 0;
      let byte;

      do {
        byte = encoded.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      const deltaLat = result & 1 ? ~(result >> 1) : result >> 1;
      lng += deltaLat;

      shift = 0;
      result = 0;

      do {
        byte = encoded.charCodeAt(index++) - 63;
        result |= (byte & 0x1f) << shift;
        shift += 5;
      } while (byte >= 0x20);

      const deltaLng = result & 1 ? ~(result >> 1) : result >> 1;
      lat += deltaLng;

      coordinates.push([lat / 1e5, lng / 1e5]);
    }

    return coordinates;
  }

  uploadFile(event: any) {
    // console.log(window.structuredClone(this.geoJsonData));
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      let workBook = XLSX.read(fileReader.result, { type: 'binary' });
      let sheetNames = workBook.SheetNames;
      let data = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
      this.locations = [];
      // console.log(data);
      const mapData = data.map((item: any, index: number) => {
        if (item.coordinaties !== '\\N') {
          this.locations.push({
            position: {
              lat: +item.coordinaties.split(',')[0],
              lng: +item.coordinaties.split(',')[1],
            },
            content: this.generateContentPin(),
            title: item['raion_ka'],
            data: item.comment || '',
          });
        }
        const coordinates = item.polygon.split(' ').map((coord: any) => {
          return [+coord.split(',')[1], +coord.split(',')[0]];
        });
        coordinates.push(coordinates[0]);
        const coordinates2 = this.decodePolyline(item['polygon_encoded']);
        coordinates2.push(coordinates2[0]);
        return {
          type: 'Feature',
          properties: {
            name: item['raion_ka'],
            color: this.generateColor(item.population),
          },
          geometry: {
            coordinates: [coordinates2],
            type: 'Polygon',
          },
        };
      });
      this.geoJsonData.features = mapData;
      // console.log(mapData);
      this.showMap = true;
      setTimeout(() => {
        this.map.data.addGeoJson(this.geoJsonData as any);
        this.styleRegions();
      }, 100);
    };
    event.target.value = null;
  }

  generateColor(population: number): string {
    const difPopulation = 2000;
    const plus = Math.round(population / difPopulation);
    const maxPopulation = 3500000;
    const percent = (population * 100) / maxPopulation;
    const greenIntensity = Math.floor((128 * percent) / 100);
    const redIntensity = 10 - Math.min(greenIntensity + plus, 128);
    const bluIntensity = 30 - Math.min(greenIntensity + plus, 128);
    return `rgb(${redIntensity}, ${Math.min(greenIntensity + plus, 128)}, ${bluIntensity})`;
  }

  public generateContentPin(): any {
    // const customContent = document.createElement('img');
    // customContent.src = this.imagesPath + 'Avatar.png'
    const customContent = document.createElement('div');
    customContent.style.width = '15px';
    customContent.style.height = '15px';
    customContent.style.backgroundColor = 'blue';
    customContent.style.borderRadius = '50%';
    customContent.style.border = '2px solid black';
    customContent.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.5)';
    return customContent;
  }
}
