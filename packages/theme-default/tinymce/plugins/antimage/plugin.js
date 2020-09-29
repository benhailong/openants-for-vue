!(function() {
  "use strict";

  var e = tinymce.util.Tools.resolve("tinymce.PluginManager");
  var o = function(o) {
    var e = o.getContent({
      source_view: !0
    });
    o.windowManager.open({
      title: "Source Code",
      size: "large",
      body: {
        type: "panel",
        items: [
          {
            type: "textarea",
            name: "code"
          }
        ]
      },
      buttons: [
        {
          type: "cancel",
          name: "cancel",
          text: "Cancel"
        },
        {
          type: "submit",
          name: "save",
          text: "Save",
          primary: !0
        }
      ],
      initialData: {
        code: e
      },
      onSubmit: function(e) {
        var t, n;
        (t = o),
          (n = e.getData().code),
          t.focus(),
          t.undoManager.transact(function() {
            t.setContent(n);
          }),
          t.selection.setCursorLocation(),
          t.nodeChanged(),
          e.close();
      }
    });
  };
  !(function t() {
    e.add("antimage", function(e) {
      var t, n;
      return (
        (t = e).addCommand("InsertAntimage", function(e) {
          if (Array.isArray(e) && e.length > 0) {
            var html = "";
            for (var i in e) {
              var obj = e[i];
              html += '<img src="' + obj + '" class="image" /><br />';
              if (i < e.length - 1) {
                html += "<br />";
              }
            }
            t.execCommand("mceInsertContent", false, html);
          }
        }),
        (n = e).ui.registry.addButton("antimage", {
          icon: "image",
          tooltip: "Insert/edit image",
          onAction: function() {
            if (typeof n.settings.clickImage === "function") {
              return n.settings.clickImage(n);
            }
            return null;
          }
        }),
        n.ui.registry.addMenuItem("antimage", {
          icon: "image",
          text: "Insert/edit image",
          onAction: function() {
            if (typeof n.settings.clickImage === "function") {
              return n.settings.clickImage(n);
            }
            return null;
          }
        }),
        {}
      );
    });
  })();
})();
