class Ability
  include CanCan::Ability

  def initialize(user)
    can :read, Article

    if user
      can :create, Article
    end

    # can [:update, :destroy], Article do |article|
    #   user.id == article.user_id
    # end
    # alternate form:
    can [:update, :destroy], Article, :user_id => user.id

    if user.admin
      can :manage, Article
    end
  end
end
