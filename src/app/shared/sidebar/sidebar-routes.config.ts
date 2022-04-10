import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
      
    { path: '/full-layout/dashboard/dashboard1', title: 'لوحة التحكم', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
 
    {
        path: '', title: 'ادارة الموردين', icon: 'ft-package', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {path:  '/full-layout/full-pages/companies', title: 'اضافة مورد', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},  
        ]
    },
  
    {
        path: '', title: 'البرامج السياحية', icon: 'ft-more-vertical', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/createTour', title: 'إضافة برنامج سياحي', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/tours', title: 'البرامج السياحية', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/createBooking', title: 'إضافة حجز لبرنامج سياحي', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/booking', title: 'حجوزات البرامج السياحية', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/groupsReport', title: 'تقارير الجروبات السياحية', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {path: '/full-layout/full-pages/guides', title: 'المرشدين السياحيين', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
            {path: '/full-layout/full-pages/transports', title: 'التنقلات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true,  submenu: [] },
          
        ]
    },

    {
        path: '', title: 'تذاكر الطيران', icon: 'ft-globe', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            
            { path: '/full-layout/full-pages/bookingFlightTickets', title: 'حجز تذاكر الطيران', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/cancelFlightTicket', title: ' الغاء حجز  تذكرة طيران', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/flightTicketsList', title: ' التذاكر', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: ' التأشيرات', icon: 'ft-flag', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            
            { path: '/full-layout/full-pages/bookingVisa', title: 'حجز تأشيرة', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/cancelVisa', title: ' الغاء حجز تأشيرة', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/visaList', title: ' التأشيرات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'الفنادق', icon: 'ft-star', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/hotels', title: '  اضافة فندق', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/bookingHotel', title: 'حجز فندق', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/cancelHotelBooking', title: 'الغاء حجز فندق ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/bookingHotels', title: 'حجوزات الفنادق', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
        ]
    },
    {
        path: '', title: 'المالية', icon: 'ft-package', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {path:  '/full-layout/full-pages/safeBox', title: 'الخزنة', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: []},
            { path: '/full-layout/full-pages/budget', title: 'الموازنة المالية', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/bonds', title: 'السندات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
           
            
        ]
    },
    {path: '', title: 'كشف حساب', icon: 'ft-pie-chart', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
        { path: '/full-layout/full-pages/companiesStatement', title: 'الشركات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/full-layout/full-pages/accountsBalanceComponent', title: ' أرصدة الحسابات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        { path: '/full-layout/full-pages/commissionsComponent', title: ' العمولات والمصروفات ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

        
    ]
},
    {
        path: '', title: 'الموظفين', icon: 'ft-users', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/roles', title: 'الصلاحيات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/full-layout/full-pages/users', title: 'الموظفين', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            
            
        ]
    },
    {
        path: '', title: 'إعدادات الحساب', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/full-layout/full-pages/account-settings', title: 'الإعدادات', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false ,submenu: [] },
            { path: '/full-layout/full-pages/profile', title: 'الملف الشخصي', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
           
        ]
    },
   
 

];

