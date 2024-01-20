({
    name: "ESP-NOW", // Category Name
    description: "Communication between ESP-32 via ESP-NOW",
    author: "Naythan_touqe",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#E74C3C", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="esp_now_add_peer">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">FF:FF:FF:FF:FF:FF</field>
                        </shadow>
                    </value>
                    <value name="channel">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="esp_now_remove_peer">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">FF:FF:FF:FF:FF:FF</field>
                        </shadow>
                    </value>
                </block>
            `
        },

        "esp_now_get_my_mac",
        
        {
            xml: `
                <block type="esp_now_send">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">Hello !</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="esp_now_send_to">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">Hello !</field>
                        </shadow>
                    </value>
                    <value name="to">
                        <shadow type="text">
                            <field name="TEXT">FF:FF:FF:FF:FF:FF</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        
        "esp_now_is_ready_read",
        "esp_now_get_sender_mac",
        "esp_now_read_as_text",
        "esp_now_read_as_number",
        // added
        "esp_now_DEBUG_print_peers_Info",
        "esp_now_DEBUG_get_peer_count"
    ],
    chip: [
        "ESP32" // Chip support
    ]
});
