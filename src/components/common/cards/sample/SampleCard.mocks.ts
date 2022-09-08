import { SampleCardProps } from '.'

const base: SampleCardProps = {
  tag: 'Sample',
  title: `A great sample card`,
  body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
  imageUrl: 'https://picsum.photos/600/400/',
  author: {
    name: 'User name',
    avatarUrl: 'https://i.pravatar.cc/40',
    //avatarUrl: `https://avatars.dicebear.com/api/personas/${new Date().toISOString()}.svg`,
  },
  time: '2h ago',
}

export const mockSampleCardProps = {
  base,
}
