import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})


export class RecursosComponent {

  // ---- Transporte público ----
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
    contacto: '',
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
    contacto: 'mailto:atencioncliente@renfe.es',
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
    contacto: 'mailto:valencia.cyclocity.es@jcdecaux.com',
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
    contacto: 'mailto:info@mibisivalencia.es',
    ofrece: [
      'Crear una cuenta de usuario y gestionar tus abonos',
      'Mapa de las estaciones y disponibilidad de las bicis',
      'Consultas las tarifas'
    ],
    descargaios: 'https://apps.apple.com/es/app/mibisi/id1087894732',
    descargaAndr: 'https://apps.apple.com/es/app/valencia-bicis/id1506976366'
  };

    // ---- Transporte privado ----
  // Acciona
  accionaData = {
    linkFoto: 'assets/img/logos-apps/acciona.png',
    nombre: 'Acciona',
    empresa: 'ACCIONA Movilidad',
    web: 'https://movilidad.acciona.com/es_ES/valencia/',
    shortWeb: 'mobilidad.acciona.com',
    telefono: '900 866 002',
    email: 'accionamovilidad@acciona.com',
    contacto: 'mailto:info@cooltra.com',
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
    contacto: 'mailto:info@cooltra.com',
    ofrece: [
        'Consulta tarifas y ofertas',
        'Infórmate sobre los servicios que ofrece'
    ],
    descargaios: 'https://apps.apple.com/es/app/cooltra-motosharing-scooter/id1083424977',
    descargaAndr: 'https://play.google.com/store/apps/details?id=com.mobime.ecooltra'
  };

  // ---- GVA ----

  //GVA+ Salut
  GVASalutData = {
      linkFoto: 'assets/img/logos-apps/gvasalut.jpeg',
      nombre: 'GVA +Salut',
      empresa: 'Aplicación móvil oficial de la Conselleria de Sanitat Universal i Salut Pública',
      web: 'https://www.san.gva.es/es/web/portal-del-paciente',
      shortWeb: 'san.gva.es',
      telefono: '012',
      email: 'Formulario de consultas',
      contacto: 'https://www.gva.es/es/web/atencio_ciutadania/inicio/mi_opinion_cuenta/mop_envio_mail_sanidad',
      ofrece: [
          'Consulta de la Historia de Salud',
          'Concertar cita médica con Atención Primaria, Enfermería, Pediatría y Matrona, entre otras',
          'Consultar y gestionar las citas desde la web o la app, o llamando al teléfono del especialista que se proporciona en la información de una cita',
          'Generar justificante de citas médicas pasadas',
          'Consultar tu situación en la Lista de Espera Quirúrgica',
          'Consultar tus tratamientos de farmacia vigentes, próximas dispensaciones, advertencias y mucho más'
      ],
      descargaios: 'https://apps.apple.com/es/app/gva-salut/id1191802694',
      descargaAndr: 'https://play.google.com/store/apps/details?id=es.gva.mesSalut'
  };

  //LABORA
  LABORAData = {
    linkFoto: 'assets/img/logos-apps/gvalabora.png',
    nombre: 'LABORA',
    empresa: 'Servicio Valenciano de Empleo y Formación',
    web: 'https://labora.gva.es/es/ciutadania',
    shortWeb: 'labora.gva.es',
    telefono: '012 | 963 866 000',
    email: 'labora@gva.es',
    contacto: 'mailto:labora@gva.es',
    ofrece: [
        'Consultar e inscribirte en ofertas de empleo, cursos de formación y noticias de interés',
        'Solicitar cita previa para la primera inscripción en LABORA',
        'CERTIFICADOS: Obtener los certificados disponibles según el estado de tu demanda de empleo en LABORA, y los certificados de Formación.',
        'RENOVACIÓN, REACTIVACIÓN Y BAJA: Puedes renovar la inscripción de tu demanda de empleo, reactivar tu demanda de empleo volviendo a inscribirte, o dar de baja tu inscripción como demandante de empleo.'
    ],
    descargaios: 'https://apps.apple.com/es/app/gva-autoservef/id1131160797',
    descargaAndr: 'https://play.google.com/store/apps/details?id=es.gva.autoservef'
};

}


