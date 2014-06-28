var mediaPlugins = "";

if (mediaPickerEnabled) {
    mediaPlugins += " mediapicker";
}

if (mediaLibraryEnabled) {
    mediaPlugins += " medialibrary";
}

tinymce.init({
    language: 'zh_CN',
    selector: ".tinymce",
    skin: "orchard",
    menubar:false,
    statusbar: false,
    plugins: [
        "advlist autolink link lists charmap hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor",
        mediaPlugins
    ],
    //content_css: "css/content.css",    
    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | forecolor backcolor emoticons | code | " + mediaPlugins
});
