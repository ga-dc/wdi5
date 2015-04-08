require_relative "../controller.rb"

describe "a blog" do

# before each "it...do" block, do this
  before :each do
    @post = Post.create(content: "Hello")
  end

# after each "it...do" block, do this
  after :each do
    @post.destroy
  end

  it "has many posts" do
    expect(Post.all.count).to be >= 0
  end

  it "can add a new post" do
    old_count = Post.all.count
    new_post = Post.create(content: "Yo")
    expect(Post.all.count).to be(old_count + 1)
    new_post.destroy
  end

  it "can edit a post" do
    new_content = "Turtles"
    @post.update(content: new_content)
    expect(@post.content).to eq(new_content)
  end

  it "can delete a post" do
    new_post = Post.create(content: "Yo")
    old_count = Post.all.count
    new_post.destroy
    expect(Post.all.count).to be(old_count - 1)
  end

  describe "posts" do

    it "has content" do
      expect(@post.content).not_to be_empty
    end

    it "is a post" do
      expect(@post.class).to be(Post)
    end

    it "is an ActiveRecord model" do
      expect(Post).to be < ActiveRecord::Base
    end

  end

end


describe "sinatra blog" do

  it "can get all the blog posts"

  it "can delete blog posts"

  it "can update a blog post"

  it "can create blog post"

end
