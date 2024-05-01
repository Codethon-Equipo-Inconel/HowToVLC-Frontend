import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})

export class RecursosComponent {

  // EMT
  emtData = {
    linkFoto: 'assets/img/logos-apps/emt.png',
    nombre: 'EMT',
    empresa: 'Empresa Metropolitana de Transporte',
    web: 'https://www.emtvalencia.es',
    shortWeb: 'emtvalencia.es',
    telefono: '900 461 046',
    email: 'adminweb@fgv.es',
    ofrece: [
      'Consulta los horarios de los buses',
      'Consulta cuántos viajes te quedan en la tarjeta',
      'Recarga la tarjeta',
      'Infórmate sobre el abono gratuito para menores de 31'
    ],
    descargaios: 'https://apps.apple.com/us/app/emt-valencia/id563794473?l=es&ls=1',
    descargaAndr: 'https://play.google.com/store/apps/details?id=es.emtvalencia.emt'
  };

  // Fernanbús
  fernanbusData = {
    linkFoto: 'assets/img/logos-apps/fernanbus.png',
    nombre: 'Fernanbús',
    empresa: 'Empresa marca METROBUS',
    web: 'https://transviago.com/fernanbus/',
    shortWeb: 'fernanbus.es',
    telefono: '961 500 082',
    email: 'info@fernanbus.es',
    ofrece: [
      'Consulta los horarios de los buses'
    ],
    descargaios: 'https://apps.apple.com/es/app/fernanbus-app/id1573440983',
    descargaAndr: 'https://play.google.com/store/apps/details?id=io.avsa.siri&pcampaignid=web_share'
  };

  // Metrovalencia
  metrovalenciaData = {
    linkFoto: 'assets/img/logos-apps/metrovalencia.png',
    nombre: 'Metrovalencia',
    empresa: 'Ferrocarriles de la Generalidad Valenciana',
    web: 'https://www.metrovalencia.es',
    shortWeb: 'metrovalencia.es',
    telefono: '900 461 046',
    email: '',
    ofrece: [
      'Consulta los horarios de los metros',
      'Consulta cuántos viajes te quedan en la tarjeta',
      'Recarga la tarjeta',
      'Infórmate sobre el abono gratuito para menores de 31'
    ],
    descargaios: 'https://apps.apple.com/es/app/metrovalencia-oficial/id1321451717',
    descargaAndr: 'https://play.google.com/store/apps/details?id=com.fgv.metrovalencia&hl=es_419&gl=US'
  };

  // Renfe
  renfeData = {
    linkFoto: 'assets/img/logos-apps/renfe.jpeg',
    nombre: 'Renfe',
    empresa: 'Renfe Operadora',
    web: 'https://www.renfe.com',
    shortWeb: 'renfe.com',
    telefono: '912 320 320',
    email: 'atencioncliente@renfe.es',
    ofrece: [
      'Compra de billetes de trenes de cualquier distancia',
      'Consulta de horarios y tarifas',
      'Información sobre estaciones de tren'
    ],
    descargaios: 'https://apps.apple.com/es/app/renfe/id1544224672',
    descargaAndr: 'https://play.google.com/store/apps/details?id=com.renfeviajeros.ticket'
  };

  // Valenbisi
  valenbisiData = {
    linkFoto: 'assets/img/logos-apps/valenbisi.png',
    nombre: 'Valenbisi',
    empresa: 'Servicio de Alquiler de Bicicletas Públicas de Valencia',
    web: 'https://www.valenbisi.es/',
    shortWeb: 'valenbisi.es',
    telefono: '900 900 722',
    email: 'valencia.cyclocity.es@jcdecaux.com',
    ofrece: [
      'Encontrar las estaciones más cercanas y su disponibilidad',
      'Consulta de rutas y vías ciclistas',
      'Obtener recompensas y viajes gratis para tus amigos',
      'Consulta tarifas y abonos'
    ],
    descargaios: 'https://apps.apple.com/es/app/valenbisi-official/id1608332826',
    descargaAndr: 'https://play.google.com/store/apps/details?id=com.jcdecaux.vls.valence&hl=es_EC'
  };

  // Mibisi
  mibisiData = {
    linkFoto: 'assets/img/logos-apps/mibisi.png',
    nombre: 'Mibisi',
    empresa: 'Sistema Metropolitano de Bicicleta Pública',
    web: 'https://www.mibisivalencia.es',
    shortWeb: 'mibisivalencia.es',
    telefono: '961 111 575',
    email: 'info@mibisivalencia.es',
    ofrece: [
      'Crear una cuenta de usuario y gestionar tus abonos',
      'Mapa de las estaciones y disponibilidad de las bicis',
      'Consultas las tarifas'
    ],
    descargaios: 'https://apps.apple.com/es/app/mibisi/id1087894732',
    descargaAndr: 'https://apps.apple.com/es/app/valencia-bicis/id1506976366'
  };

  // Acciona
  accionaData = {
    linkFoto: 'assets/img/logos-apps/acciona.png',
    nombre: 'Acciona',
    empresa: 'ACCIONA Movilidad',
    web: 'https://movilidad.acciona.com/es_ES/valencia/',
    shortWeb: 'mobilidad.acciona.com',
    telefono: '900 866 002',
    email: 'accionamovilidad@acciona.com',
    ofrece: [
        'Consulta tarifas y ofertas',
        'Encuentra respuesta a las FAQ'
    ],
    descargaios: 'https://apps.apple.com/us/app/acciona-motosharing-movilidad/id1431664935?ign-mpt=uo%3D4',
    descargaAndr: 'https://play.google.com/store/apps/details?id=com.acciona.mobility.app'
};

// Cooltra
cooltraData = {
    linkFoto: 'assets/img/logos-apps/cooltra.png',
    nombre: 'Cooltra',
    empresa: 'Cooltra Motosharing',
    web: 'https://cooltra.com/es/',
    shortWeb: 'cooltra.com',
    telefono: '937 066 912',
    email: 'info@cooltra.com',
    ofrece: [
        'Consulta tarifas y ofertas',
        'Infórmate sobre los servicios que ofrece'
    ],
    descargaios: 'https://apps.apple.com/es/app/cooltra-motosharing-scooter/id1083424977',
    descargaAndr: 'https://play.google.com/store/apps/details?id=com.mobime.ecooltra'
};

}


