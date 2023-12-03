
var latest_pk = 0;
var latest_seen_pk = 0;

function get_updates() {
    $.ajax({
        url: updates_path,
        type: 'GET',
        data: {latest_pk: latest_pk, latest_seen_pk: latest_seen_pk},

        success: function(json) {
            $('#messages-list').prepend(json.new_messages_rendered);
            add_date_headers(json.new_messages_rendered);
            for (let pk of json.seen_messages_pk) {
                $('#tick-'+pk).text('✓✓');
            }
            latest_pk = json.latest_pk;
            latest_seen_pk = json.latest_seen_pk;
        },

        complete: function(data) {
            setTimeout(get_updates, 1000);
        }
    });
}
