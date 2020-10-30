import React, { useState, useEffect } from 'react';
import { Row, Col, Tag, Card, Avatar, List, Tooltip, Button, Progress } from 'antd';
import { CalendarOutlined, TagOutlined, PlusCircleOutlined, DollarOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';
import GlobalLayout from '../components/globalLayout';
// import initiativeAvatar from "../images/initiative_avatar.png";
// import initiativeImage from "../images/initiative_detail.png";


// const oppData = [
//     {
//         id: 0,
//         name: "Time Warp Comics & Games",
//         deadline: 100000,
//         tags: ["youth", "activism"],
//         description: "Boulder's source for comics, card games, collectibles, and other goodies for 35 years and counting!",
//         status: 2,
//         image: initiativeImage,
//         avatar: initiativeAvatar
//     },
//     {
//         id: 1,
//         name: "opp 2",
//         deadline: 10000,
//         tags: ["democracy", "social"],
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus rutrum tellus pellentesque eu tincidunt. Posuere urna nec tincidunt praesent semper. Pellentesque eu tincidunt tortor aliquam. Pretium lectus quam id leo in vitae turpis massa. In aliquam sem fringilla ut morbi tincidunt. Sagittis nisl rhoncus mattis rhoncus urna neque. Amet purus gravida quis blandit turpis cursus. Pulvinar etiam non quam lacus. Etiam sit amet nisl purus in. Amet commodo nulla facilisi nullam vehicula ipsum a.",
//         status: 2,
//         image: initiativeImage,
//         avatar: initiativeAvatar
//     },
//     {
//         id: 2,
//         name: "opp 3",
//         deadline: 10000,
//         tags: ["democracy", "social"],
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu. A diam maecenas sed enim. Lectus urna duis convallis convallis. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Id velit ut tortor pretium viverra suspendisse potenti nullam. Eu sem integer vitae justo eget magna fermentum iaculis eu. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Volutpat odio facilisis mauris sit.",
//         status: 2,
//         image: initiativeImage,
//         avatar: initiativeAvatar
//     },
//     {
//         id: 3,
//         name: "opp 4",
//         deadline: 10000,
//         tags: ["democracy", "social"],
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus. Malesuada nunc vel risus commodo viverra maecenas accumsan. Eget felis eget nunc lobortis mattis. Enim praesent elementum facilisis leo vel. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Est ultricies integer quis auctor elit sed vulputate mi sit. Vulputate sapien nec sagittis aliquam malesuada. Consectetur lorem donec massa sapien. Integer vitae justo eget magna fermentum iaculis eu. Vel risus commodo viverra maecenas accumsan. Eu facilisis sed odio morbi quis commodo odio aenean. Magna ac placerat vestibulum lectus mauris ultrices eros. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Senectus et netus et malesuada fames ac turpis egestas maecenas. Diam vulputate ut pharetra sit amet aliquam id diam. Non nisi est sit amet facilisis. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Massa id neque aliquam vestibulum morbi. Malesuada pellentesque elit eget gravida.",
//         status: 2,
//         image: initiativeImage,
//         avatar: initiativeAvatar
//     },
//     {
//         id: 4,
//         name: "opp 5",
//         deadline: 10000,
//         tags: ["democracy", "social"],
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Integer quis auctor elit sed vulputate. Et leo duis ut diam quam nulla. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Et leo duis ut diam quam nulla porttitor massa. Cursus vitae congue mauris rhoncus. Porttitor eget dolor morbi non arcu. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Purus viverra accumsan in nisl nisi scelerisque eu. Molestie ac feugiat sed lectus. Ornare lectus sit amet est placerat in egestas erat imperdiet. Diam donec adipiscing tristique risus nec feugiat in. Aliquam faucibus purus in massa tempor. Ac ut consequat semper viverra nam libero. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Nec feugiat in fermentum posuere urna. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sapien pellentesque habitant morbi tristique senectus et netus et.",
//         status: 2,
//         image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//         avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
//     }
// ];

const { Meta } = Card;

function Index() {

    const [initiatives, setInitiatives] = useState([]);

    const length = 200;
    const role = 'organization';
    
    //getData();

    useEffect(() => {   
        const fetchData = async () => {
            const data = await fetch('/.netlify/functions/initiatives')
                .then((response) => response.json());
            setInitiatives(data);
        }
        fetchData();
    }, []);

    const tags = (data) => (
      data.map(tag => (
          <Tag key={tag}>{tag}</Tag>
      ))
    )

    return (
        <GlobalLayout>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 10,
                }}
                grid={{ gutter: 16, column: 3 }}
                dataSource={initiatives}
                header={
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 20
                }}>
                    <div></div>
                    {role === "organization" && (
                    <div style={{marginRight: "24px"}}>
                        <Button
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        data-testid="add-contact-button"
                        >
                        <Link style={{color: "#000", fontFamily: "Messer", textTransform: "uppercase", fontSize: "18px", padding:"20px"}} to="/opportunityedit:0">Create</Link>
                        </Button>
                    </div>
                    )}              
                </div>
                }
                renderItem={item => (
                <List.Item>
                    <Card
                    key={item.id}
                    cover={
                        <img
                        alt={item.title}
                        src={item.main_image}
                        />
                    }
                    actions={[
                        <Tooltip placement="bottom" title="estimated">
                        <Progress strokeColor="#000" style={{paddingLeft: "24px", paddingRight: "24px"}} percent={50} status="active" />
                        </Tooltip>,
                        <Tooltip placement="bottom" title="fund initiative">
                        <Link to={'/initiative:' + item.id}><DollarOutlined key="fund" /></Link>
                        </Tooltip>
                    ]}
                    >
                    <Meta
                        title={<Link style={{color: "#000"}} to={'/initiative:' + item.id}>{item.title}</Link>}
                        description={
                        <div className="opportunity-detail-card">
                            <Row justify="space-between">
                            <Col span={2}>
                                <Tooltip placement="left" title="deadline">
                                <CalendarOutlined />
                                </Tooltip>
                            </Col>
                            <Col span={22}>
                                {item.deadline}
                            </Col>
                            </Row>
                            <Row justify="space-between" style={{marginTop: "12px", marginBottom: "12px"}}>
                            <Col span={2}>
                                <Tooltip placement="left" title="tags">
                                <TagOutlined />
                                </Tooltip>
                            </Col>
                            <Col span={22}>categories</Col>
                            </Row>
                            <Row justify="space-between">
                            <Col span={24}>{item.description.substring(0, length)}...</Col>
                            </Row>
                        </div>
                        }
                    />
                    </Card>
                </List.Item>
                )}
            />
        </GlobalLayout>
    );
}

export default Index;