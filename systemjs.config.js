System.config({
    paths: {
        'npm:': '/node_modules/'
    },
    map: {
        app: 
        'dist/',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/compiler-cli': 'npm:@angular/compiler-cli/bundles/compiler-cli.umd.js',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
        'core-js': 'npm:core-js',
        'zone.js': 'npm:zone.js',
        'rxjs': 'npm:rxjs',
        'tslib': 'npm:tslib/tslib.js'
    },
    packages: {
        'dist/': {},
        'rxjs': {},
        'core-js': {},
        'zone.js': {}
    }
});