module.exports = function (grunt) {
  grunt.registerTask('build', [
    'get_build_props',
    'clean:target',
    'clean:build',
    'require_css_deps:copy',
    'less:build',
    'copy:kibana_src',
    'clean:dev_only_plugins',
    'touch_config',
    'replace:build_props',
    'requirejs',
    'clean:unneeded_source_in_build',
    'copy:server_src', //���� �����ļ�  src/server/config/*.yml
    'replace_package_json',
    'replace:dist',
    'copy:dist',
    'compile_dist_readme',
    'chmod_kibana', //�ļ���Ȩ��
    'make_plugin_dir',
    'copy:plugin_readme',
    'describe_bundled_plugins',
    'copy:shrinkwrap',
    //'npm_install_kibana', //
    'clean:test_from_node_modules',
    //'download_node_binaries', //����������node�汾
    'copy:versioned_dist'
    //'create_services',
    //'create_packages', //����ѹ����
    //'create_shasums'
  ]);
};
