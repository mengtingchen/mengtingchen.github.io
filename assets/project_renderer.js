// Functions.

function render_project(project_name,
    figure_path,
    title_name,
    author_list,
    material_list,
    award_name = null) {
    if (document.getElementsByName(project_name).length === 0) {
        return;
    }

    var img = document.createElement('img');
    img.src = figure_path;
    img.setAttribute('style',
        'width: 100%; max-height: 120px; object-fit: cover;');

    var title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.innerHTML = title_name;

    var author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.innerHTML = '';
    for (var idx = 0; idx < author_list.length; idx++) {
        if (idx < author_list.length - 1 &&
            (author_list[idx + 1] == 'equal' ||
                author_list[idx + 1] == 'corresponding')) {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                author_list[idx + 1] +
                '"></span>');
            idx++
        } else {
            author.innerHTML += (
                '<span name="' +
                author_list[idx] +
                '" title="' +
                '"></span>');
        }
        if (idx < author_list.length - 1) {
            author.innerHTML += ', ';
        }
    }

    var material = document.createElement('div');
    material.setAttribute('class', 'material');
    material_list.innerHTML = '';
    for (var idx = 0; idx < material_list.length; idx++) {
        material.innerHTML += (
            '<a href="' +
            material_list[idx][1] +
            '" target="_blank">' +
            material_list[idx][0] +
            '</a>');
        if (idx < material_list.length - 1) {
            material.innerHTML += ' / ';
        }
    }

    if (award_name) {
        var award = document.createElement('div');
        award.setAttribute('class', 'award');
        award.innerHTML = award_name;
    }

    var row = document.getElementsByName(project_name)[0];
    var cell = row.insertCell(0);
    cell.setAttribute('width', '25%');
    cell.appendChild(img);
    cell = row.insertCell(1);
    cell.appendChild(title);
    cell.appendChild(author);
    cell.appendChild(material);
    if (award_name) {
        cell.appendChild(award);
    }
};

function render_author(author_name, link = null, alias = null) {
    var list = document.getElementsByName(author_name);
    for (var idx = 0; idx < list.length; idx++) {
        var contribution = list[idx].title;
        var tailing = '';
        if (contribution === 'equal') {
            tailing = '*';
        } else if (contribution === 'corresponding') {
            tailing = '<sup>+<sup>';
        }

        var context = '';
        if (alias) {
            context = alias + tailing;
        } else {
            context = author_name + tailing;
        }

        if (link) {
            list[idx].innerHTML = (
                '<a href="' +
                link +
                '" target="_blank">' +
                '<span style="white-space:nowrap">' + context + '</span>' +
                '</a>');
        } else {
            list[idx].innerHTML = context;
        }

        if (author_name === 'Mengting Chen') {
            list[idx].setAttribute('class', 'me');
        }
    }
};










// Template.

render_project(
    project_name = 'template',
    figure_path = './assets/projects/',
    title_name = '',
    author_list = [
        '',
    ],
    material_list = [
        ['Paper', ''],
        ['Project', ''],
        ['Code', ''],
        ['Demo', ''],
    ],
    award_name = null,
);










// Projects.
render_project(
    project_name = 'Advancing Myopia To Holism',
    figure_path = './assets/projects/Advancing_Myopia_To_Holism.jpg',
    title_name = 'Advancing Myopia To Holism: Fully Contrastive Language-Image Pre-training',
    author_list = [
        'Haicheng Wang',
        'Chen Ju',
        'Weixiong Lin',
        'Shuai Xiao',
        'Mengting Chen',
        'Yixuan Huang',
        'Chang Liu',
        'Mingshuai Yao',
        'Jinsong Lan',
        'Ying Chen',
        'Qingwen Liu',
        'Yanfeng Wang',
    ],
    material_list = [
        ['CVPR 2025', 'https://arxiv.org/abs/2412.00440'],
    ],
    award_name = null,
);

render_project(
    project_name = 'Tunnel Try-on',
    figure_path = './assets/projects/tunnel-try-on.png',
    title_name = 'Tunnel Try-on: Excavating Spatial-temporal Tunnels for High-quality Virtual Try-on in Videos',
    author_list = [
        'Zhengze Xu',
        'Mengting Chen',
        'Zhao Wang',
        'Linyu Xing',
        'Zhonghua Zhai',
        'Nong Sang',
        'Jinsong Lan',
        'Shuai Xiao',
        'Changxin Gao',
    ],
    material_list = [
        ['ACM Multimedia 2024', 'https://arxiv.org/abs/2404.17571'],
        ['Project', 'https://mengtingchen.github.io/tunnel-try-on-page/'],
    ],
    award_name = null,
);

render_project(
    project_name = 'Wear-Any-Way',
    figure_path = './assets/projects/wear-any-way.png',
    title_name = 'Wear-Any-Way: Manipulable Virtual Try-on via Sparse Correspondence Alignment',
    author_list = [
        'Mengting Chen',
        'Xi Chen',
        'Zhonghua Zhai',
        'Chen Ju',
        'Xuewen Hong',
        'Jinsong Lan',
        'Shuai Xiao',
    ],
    material_list = [
        ['ECCV 2024', 'https://arxiv.org/abs/2403.12965'],
        ['Project', 'https://mengtingchen.github.io/wear-any-way-page/'],
        ['Media', 'https://mp.weixin.qq.com/s/MWFfUrj_-bitHxgeOtDIKQ'],
    ],
    award_name = null,
);

render_project(
    project_name = 'LivePhoto',
    figure_path = './assets/projects/livephoto.gif',
    title_name = 'LivePhoto: Real Image Animation with Text-guided Motion Control',
    author_list = [
        'Xi Chen',
        'Zhiheng Liu',
        'Mengting Chen',
        'Yutong Feng',
        'Yu Liu',
        'Yujun Shen',
        'Hengshuang Zhao',
    ],
    material_list = [
        ['ECCV 2024', 'https://arxiv.org/pdf/2312.02928.pdf'],
        ['Project', 'https://xavierchen34.github.io/LivePhoto-Page/'],
        ['Code', 'https://github.com/XavierCHEN34/LivePhoto'],
        ['Demo', 'https://www.youtube.com/watch?v=M2vzrTYAsQI'],
    ],
    award_name = null,
);


render_project(
    project_name = 'DTN',
    figure_path = './assets/projects/DTN.jpg',
    title_name = 'Diversity transfer network for few-shot learning',
    author_list = [
        'Mengting Chen',
        'Yuxin Fang',
        'Xinggang Wang',
        'Heng Luo',
        'Yifeng Geng',
        'Xinyu Zhang',
        'Chang Huang',
        'Wenyu Liu',
        'Bo Wang',
    ],
    material_list = [
        ['AAAI 2020 (Oral)', 'https://ojs.aaai.org/index.php/AAAI/article/view/6628'],
        ['Code', 'https://github.com/Yuxin-CV/DTN'],
    ],
    award_name = null,
);

render_project(
    project_name = 'SRF',
    figure_path = './assets/projects/SRF.jpg',
    title_name = 'Structured random forest for label distribution learning',
    author_list = [
        'Mengting Chen',
        'Xinggang Wang',
        'Bin Feng',
        'Wenyu Liu',
    ],
    material_list = [
        ['Neurocomputing 2018', 'https://www.sciencedirect.com/science/article/abs/pii/S0925231218310622'],
    ],
    award_name = null,
);

render_project(
    project_name = 'DENOISER',
    figure_path = './assets/projects/DENOISER.jpg',
    title_name = 'DENOISER: Rethinking the Robustness for Open-Vocabulary Action Recognition',
    author_list = [
        'Haozhe Cheng',
        'Chen Ju',
        'Haicheng Wang',
        'Jinxiang Liu',
        'Mengting Chen',
        'Qiang Hu',
        'Xiaoyun Zhang',
        'Yanfeng Wang',
    ],
    material_list = [
        ['arXiv', 'https://arxiv.org/abs/2404.14890'],
    ],
    award_name = null,
);

render_project(
    project_name = 'MimicBrush',
    figure_path = './assets/projects/MimicBrush.png',
    title_name = 'Zero-shot Image Editing with Reference Imitation',
    author_list = [
        'Xi Chen',
        'Yutong Feng',
        'Mengting Chen',
        'Yiyang Wang',
        'Shilong Zhang',
        'Yu Liu',
        'Yujun Shen',
        'Hengshuang Zhao',
    ],
    material_list = [
        ['NeurIPS 2024', 'https://arxiv.org/abs/2406.07547'],
        ['Project', 'https://xavierchen34.github.io/MimicBrush-Page/'],
        ['Code', 'https://github.com/ali-vilab/MimicBrush'],
        ['Demo', 'https://huggingface.co/spaces/xichenhku/MimicBrush'],
    ],
    award_name = null,
);



// Authors.
render_author('Yixuan Huang');
render_author('Chang Liu');
render_author('Mingshuai Yao');
render_author('Ying Chen');
render_author('Qingwen Liu');
render_author('Haozhe Cheng');
render_author('Weixiong Lin', 'https://scholar.google.com.hk/citations?user=Ka57qcUAAAAJ&hl=nl');
render_author('Haicheng Wang', 'https://scholar.google.com/citations?user=x0Uk7S8AAAAJ&hl=zh-CN');
render_author('Jinxiang Liu', 'https://scholar.google.com/citations?user=wSRKaWIAAAAJ&hl=en');
render_author('Qiang Hu');
render_author('Xiaoyun Zhang', 'https://scholar.google.com.hk/citations?user=0m0aIqsAAAAJ&hl=zh-CN');
render_author('Yanfeng Wang', 'https://scholar.google.com/citations?user=x_sgJskAAAAJ&hl=zh-CN');
render_author('Bin Feng', 'https://scholar.google.com.hk/citations?user=nRc8u6gAAAAJ&hl=zh-CN');
render_author('Bo Wang', 'https://scholar.google.com/citations?user=37FDILIAAAAJ&hl=en');
render_author('Changxin Gao', 'https://scholar.google.com/citations?user=4tku-lwAAAAJ&hl=en');
render_author('Chen Ju', 'https://voide1220.github.io/');
render_author('Chang Huang', 'https://scholar.google.com/citations?user=IyyEKyIAAAAJ&hl=en');
render_author('Hengshuang Zhao', 'https://hszhao.github.io/');
render_author('Heng Luo', 'https://scholar.google.fr/citations?user=0xIrC1cAAAAJ&hl=en');
render_author('Jinsong Lan');
render_author('Linyu Xing', 'https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=y19jyMwAAAAJ');
render_author('Mengting Chen', 'https://scholar.google.com.hk/citations?user=LcoK9ZEAAAAJ&hl=zh-CN');
render_author('Nong Sang', 'https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl=zh-CN');
render_author('Shilong Zhang', 'https://jshilong.github.io/');
render_author('Shuai Xiao');
render_author('Wenyu Liu', 'https://scholar.google.com/citations?user=D7jDk7gAAAAJ&hl=zh-CN');
render_author('Xi Chen', 'https://xavierchen34.github.io/');
render_author('Xinggang Wang', 'https://scholar.google.com/citations?user=qNCTLV0AAAAJ&hl=en');
render_author('Xuewen Hong');
render_author('Xinyu Zhang', 'https://scholar.google.co.in/citations?user=M7hnG9oAAAAJ&hl=en');
render_author('Yifeng Geng',);
render_author('Yiyang Wang',);
render_author('Yuxin Fang', 'https://scholar.google.com/citations?user=_Lk0-fQAAAAJ&hl=en');
render_author('Yu Liu', 'https://scholar.google.com/citations?user=8zksQb4AAAAJ');
render_author('Yujun Shen', 'https://shenyujun.github.io/');
render_author('Yutong Feng', 'https://scholar.google.com/citations?user=mZwJLeUAAAAJ');
render_author('Zhao Wang');
render_author('Zhengze Xu', 'https://scholar.google.co.uk/citations?user=ItKODP4AAAAJ&hl=en');
render_author('Zhiheng Liu', 'https://johanan528.github.io/');
render_author('Zhonghua Zhai', 'https://scholar.google.com.hk/citations?hl=zh-CN&user=o4SDCAYAAAAJ');
render_author('');